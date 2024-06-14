// middleware/admin.ts
import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if(process.client) {
    authStore.initialize(); // Inicializa el store desde el localStorage

    if(to.path.startsWith('/administrador') && !authStore.isAuthenticated) {
      return navigateTo('/login');
    } else if(to.path === '/login' && authStore.isAuthenticated) {
      return navigateTo('/administrador/admin');
    }
  } else {
    // Esto es para el lado del servidor
    if(to.path.startsWith('/administrador') && !authStore.isAuthenticated) {
      return navigateTo('/login');
    } else if(to.path === '/login' && authStore.isAuthenticated) {
      return navigateTo('/administrador/admin');
    }
  }
});
