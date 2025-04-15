"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// 이제 여기서는 ssr: false 사용 가능
const UserClient = dynamic(() => import("./UserClient"), { ssr: false });

export default function ClientWrapper({ username }: { username: string }) {
  console.log(username,'username-clientWrapper')
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserClient username={username} />
    </Suspense>
  );
}
