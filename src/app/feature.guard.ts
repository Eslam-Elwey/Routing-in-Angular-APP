import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const featureGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const guardStatus = localStorage.getItem('guardState');

  if (guardStatus === 'allow') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
