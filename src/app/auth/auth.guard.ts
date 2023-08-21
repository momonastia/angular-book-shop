import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  constructor(
    private authService:AuthService
  ) {}

  return true;
};
