import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";

export default function NavigationMenuPriceBoard() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex-wrap">
        {/* Danh mục yêu thích */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/docs">Danh mục yêu thích</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* HOSE */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>HOSE</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-50 gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">VN30</a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">HOSE</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* HNX */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>HNX</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-50 gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">HNX30</a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">HNX</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* UPCOM */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/docs">UPCOM</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Chứng quyền */}
        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/docs">Chứng quyền</a>
          </NavigationMenuLink>
        </NavigationMenuItem> */}

        {/* ETF */}
        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/docs">ETF</a>
          </NavigationMenuLink>
        </NavigationMenuItem> */}

        {/* Lô lẻ */}
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Lô lẻ</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-50 gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">HOSE</a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">HNX</a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">UPCOM</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        {/* Ngành */}
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Ngành</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-50 gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">Bán lẻ</a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">Bảo hiểm</a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">Công nghệ thông tin</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
