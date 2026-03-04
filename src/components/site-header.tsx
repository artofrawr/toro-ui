import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="container-wrapper px-6 3xl:fixed:px-0">
        <div className="flex h-(--header-height) items-center **:data-[slot=separator]:h-4! 3xl:fixed:container">
          <Button>
            <Link href="/">TORO UI</Link>
          </Button>
          <div className="hidden lg:flex">
            MAIN NAV GOES HERE
          </div>
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              SEARCH GOES HERE
            </div>
            <Separator
              orientation="vertical"
              className="ml-2 hidden lg:block"
            />
            <div>Github Link</div>
            <Separator orientation="vertical" className="hidden 3xl:flex" />
            <div>Mode Switcher</div>
            <Separator orientation="vertical" className="mr-2" />
            <div>Action Buttons</div>
          </div>
        </div>
      </div>
    </header>
  )
}