<template>
  <div v-if="!cookieAccepted" class="cookie-banner max-w-screen-lg mx-auto animate-fade-right animate-delay-1000">
    <div class="cookie-content">
      <div>
        <h3 class="cookie-title">POLÍTICA DE COOKIES <font-awesome-icon class="ml-2" icon="cookie-bite" /></h3>
        <p class="cookie-text">En Eurostone, utilizamos cookies para mejorar su experiencia en nuestro sitio web. Nos ayudan a recordar sus preferencias y a mejorar nuestros servicios.</p>
        <NuxtLink to="/cookies" target="_blank" class="cookie-link">Leer más</NuxtLink>
      </div>
    </div>
    <div class="cookie-actions w-4/5 mx-auto">
      <button class="cookie-btn accept-btn" @click="acceptAllCookies">Aceptar todas</button>
      <button class="cookie-btn essential-btn" @click="acceptEssentialCookies">Aceptar solo esenciales</button>
      <button class="cookie-btn reject-btn" @click="rejectCookies">Rechazar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Cookies from 'js-cookie';

const cookieDuration = 1; // 1 dia
const rejectionDuration = 5 / 1440; // 5 minutos
const cookieAccepted = ref(false);

onMounted(() => {
  cookieAccepted.value = Cookies.get('cookie_consent') === 'all' ||
                         Cookies.get('cookie_consent') === 'essential' ||
                         Cookies.get('cookie_consent') === 'rejected';
});

const acceptAllCookies = () => {
  Cookies.set('cookie_consent', 'all', { expires: cookieDuration });
  cookieAccepted.value = true;
  // Logic to enable all cookies
};

const acceptEssentialCookies = () => {
  Cookies.set('cookie_consent', 'essential', { expires: cookieDuration });
  cookieAccepted.value = true;
  // Logic to enable only essential cookies
};

const rejectCookies = () => {
  Cookies.set('cookie_consent', 'rejected', { expires: rejectionDuration });
  cookieAccepted.value = true;
  // Logic to disable non-essential cookies
};
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  background: #000;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  opacity: 0.98;
}

.cookie-content {
  display: flex;
  align-items: flex-start;
}

.cookie-title {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
}

.cookie-text {
  margin-top: 0.5rem;
  font-size: 0.875rem;
}

.cookie-link {
  font-weight: bold;
  color: #ffffff;
  text-decoration: underline;
  margin-top: 0.5rem;
  display: block;
  font-size: 0.875rem;
  text-underline-offset: 2px;
}

.cookie-actions {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.cookie-btn {
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  margin: 0.25rem 0;
  font-size: 0.75rem;
  transition: background-color 0.3s;
}

.accept-btn {
  background-color: #0b69f5d2;
  color: white;
}

.essential-btn {
  background-color: #1075b9c0;
  color: white;
}

.reject-btn {
  background-color: #ec3131c2;
  color: white;
}

.cookie-btn:hover {
  opacity: 0.8;
}

@media (min-width: 640px) {
  .cookie-banner {
    flex-direction: row;
    align-items: center;
  }

  .cookie-content {
    flex-direction: row;
    align-items: center;
  }

  .cookie-actions {
    flex-direction: row;
    margin-top: 0;
  }

  .cookie-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
  }
}
</style>
