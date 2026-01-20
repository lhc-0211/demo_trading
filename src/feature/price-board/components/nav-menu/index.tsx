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
    <NavigationMenu>
      <NavigationMenuList>
        {/* Danh mục yêu thích */}
        <NavigationMenuItem>Danh mục yêu thích</NavigationMenuItem>

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
      </NavigationMenuList>
    </NavigationMenu>
  );
}
