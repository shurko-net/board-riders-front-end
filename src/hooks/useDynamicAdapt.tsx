import { useEffect } from 'react'

interface DNode {
  parent: HTMLElement | null
  element: HTMLElement
  to: HTMLElement
  breakpoint: string
  order: number | 'first' | 'last'
  index: number
}

interface DMediaQuery {
  query: string
  breakpoint: string
}

export function useDynamicAdapt(type: 'min' | 'max' = 'max'): void {
  const className = '_dynamic_adapt_'
  const attrName = 'data-da'

  useEffect(() => {
    const dNodes: DNode[] = getDNodes()
    const dMediaQueries: DMediaQuery[] = getDMediaQueries(dNodes)

    dMediaQueries.forEach(dMediaQuery => {
      const matchMedia = window.matchMedia(dMediaQuery.query)
      const filteredDNodes = dNodes.filter(
        ({ breakpoint }) => breakpoint === dMediaQuery.breakpoint
      )
      const mediaHandler = getMediaHandler(matchMedia, filteredDNodes)

      matchMedia.addEventListener('change', mediaHandler)
      mediaHandler()
    })

    return () => {
      // Убираем слушатели при размонтировании компонента
      dMediaQueries.forEach(dMediaQuery => {
        const matchMedia = window.matchMedia(dMediaQuery.query)
        const filteredDNodes = dNodes.filter(
          ({ breakpoint }) => breakpoint === dMediaQuery.breakpoint
        )
        const mediaHandler = getMediaHandler(matchMedia, filteredDNodes)
        matchMedia.removeEventListener('change', mediaHandler)
      })
    }
  }, [])

  function getDNodes(): DNode[] {
    const result: DNode[] = []
    const elements = Array.from(document.querySelectorAll(`[${attrName}]`))

    elements.forEach(element => {
      const attr = element.getAttribute(attrName)
      if (!attr) return

      const [toSelector, breakpoint, order] = attr
        .split(',')
        .map(val => val.trim())
      const to = document.querySelector(toSelector)

      if (to) {
        result.push({
          parent: element.parentElement,
          element: element as HTMLElement,
          to: to as HTMLElement,
          breakpoint: breakpoint ?? '767',
          order: parseOrder(order), // Используем новую функцию для парсинга
          index: -1
        })
      }
    })

    return sortDNodes(result)
  }

  // Функция для парсинга order
  function parseOrder(order: string): number | 'first' | 'last' {
    if (order === 'first') return 'first'
    if (order === 'last') return 'last'

    const parsedNumber = Number(order)
    return isNaN(parsedNumber) ? 'last' : parsedNumber // Возвращаем число или 'last' по умолчанию
  }

  function getDMediaQueries(items: DNode[]): DMediaQuery[] {
    const uniqItems = Array.from(
      new Set(
        items.map(
          ({ breakpoint }) => `(${type}-width: ${breakpoint}px),${breakpoint}`
        )
      )
    )

    return uniqItems.map(item => {
      const [query, breakpoint] = item.split(',')
      return { query, breakpoint }
    })
  }

  function getMediaHandler(matchMedia: MediaQueryList, items: DNode[]) {
    return function mediaHandler() {
      if (matchMedia.matches) {
        items.forEach(item => moveTo(item))
        items.reverse()
      } else {
        items.forEach(item => {
          if (item.element.classList.contains(className)) {
            moveBack(item)
          }
        })
        items.reverse()
      }
    }
  }

  function moveTo(dNode: DNode) {
    const { to, element, order } = dNode

    if (element.classList.contains(className)) {
      return
    }
    dNode.index = getIndexInParent(dNode.element, dNode.element.parentElement)
    element.classList.add(className)

    if (typeof order === 'number') {
      if (order >= to.children.length) {
        to.append(element)
      } else {
        to.children[order].before(element)
      }
    } else {
      if (order === 'first') {
        to.prepend(element)
      } else if (order === 'last') {
        to.append(element)
      }
    }
  }

  function moveBack(dNode: DNode) {
    const { parent, element, index } = dNode
    element.classList.remove(className)

    if (index >= 0 && parent?.children[index]) {
      parent.children[index].before(element)
    } else {
      parent?.append(element)
    }
  }

  function getIndexInParent(
    element: HTMLElement,
    parent: HTMLElement | null
  ): number {
    return parent ? Array.from(parent.children).indexOf(element) : -1
  }

  function sortDNodes(items: DNode[]): DNode[] {
    const isMin = type === 'min' ? 1 : 0

    return [...items].sort((a, b) => {
      if (a.breakpoint === b.breakpoint) {
        if (typeof a.order === 'number' && typeof b.order === 'number') {
          return (a.order - b.order) * isMin
        }

        if (a.order === b.order) {
          return 0
        }

        if (a.order === 'first' || b.order === 'last') {
          return -1 * isMin
        }

        if (a.order === 'last' || b.order === 'first') {
          return 1 * isMin
        }

        return 0
      }

      return (parseInt(a.breakpoint) - parseInt(b.breakpoint)) * isMin
    })
  }
}
