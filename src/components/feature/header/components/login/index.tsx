import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useTranslation } from "react-i18next";

export function Login() {
  const { t } = useTranslation();

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="secondary">{t("login")}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>{t("login")}</DialogTitle>
            <DialogDescription>{t("login-title")}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="username-1">Tên đăng nhập</Label>
              <Input id="username-1" name="username" defaultValue="admin" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password-1">Mật khẩu</Label>
              <Input
                id="password-1"
                name="password"
                defaultValue="123456"
                type="password"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Thoát</Button>
            </DialogClose>
            <Button type="submit">Đăng nhập</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
