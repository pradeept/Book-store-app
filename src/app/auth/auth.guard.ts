import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  !auth.isLoggedIn ? router.navigate(["/"]) : null;
  return auth.isLoggedIn;
};
