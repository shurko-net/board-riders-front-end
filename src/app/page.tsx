"use client";

import Header from "../components/header/Header";
import Loader from "../components/loader/Loader";
import { useGetUser } from "@/api/queries/useGetUser";

export default function Home() {
  const { data: currentUser, isLoading } = useGetUser()

  if (isLoading) {
    return <Loader />
  }

  return <div>
    <Header user={currentUser} />
  </div>
}
