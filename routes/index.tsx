import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6 rounded-md"
          src="https://media.licdn.com/dms/image/C5103AQFnoeAMkAm8nw/profile-displayphoto-shrink_200_200/0/1516854313381?e=1726704000&v=beta&t=7BON5wKh-ZAba9tyR0fV9-cDiLMM5DeJveG7JQM41V0"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Perspectives</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
}
