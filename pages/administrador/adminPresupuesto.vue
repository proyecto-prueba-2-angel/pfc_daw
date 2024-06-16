<template>
  <div>
    <Header />
    <AdminButton />
    <div class="admin-container mx-auto">
      <h1>Solicitudes de Presupuesto</h1>
      <div class="bulk-actions flex flex-row space-x-8">
        <button :disabled="selectedPresupuestos.length === 0" @click="bulkMoveToTrash">Mover a Papelera <font-awesome-icon icon="ban" /></button>
        <router-link to="/administrador/adminTrashPresupuesto" class="trash-link">Papelera <font-awesome-icon icon="trash-can" /></router-link>
      </div>
      <div v-for="presupuesto in presupuestos" :key="presupuesto.id" class="presupuesto-card">
        <div class="presupuesto-details">
          <input v-model="selectedPresupuestos" type="checkbox" :value="presupuesto.id" />
          <p><strong>De:</strong> {{ presupuesto.nombre }} {{ presupuesto.apellidos }} ({{ presupuesto.email }})</p>
          <p><strong>Teléfono:</strong> {{ presupuesto.telefono }}</p>
          <p><strong>Dirección:</strong> {{ presupuesto.direccion }}, {{ presupuesto.codigo_postal }}</p>
          <p><strong>Título:</strong> {{ presupuesto.titulo_proyecto }}</p>
          <p><strong>Acabado:</strong> {{ presupuesto.acabado }}</p>
          <p><strong>Mensaje:</strong> {{ presupuesto.descripcion }}</p>
          <p class="fecha-llegada"><strong>Fecha de Llegada:</strong> {{ presupuesto.fecha_llegada }}</p>
          <div class="buttons">
            <button @click="selectPresupuesto(presupuesto)">Responder <font-awesome-icon icon="reply-all" /></button>
            <button @click="moveToTrash(presupuesto.id)">Mover a Papelera <font-awesome-icon icon="trash" /></button>
          </div>
        </div>
      </div>

      <div v-if="selectedPresupuesto" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <h2>Responder a {{ selectedPresupuesto.nombre }} {{ selectedPresupuesto.apellidos }}</h2>
          <textarea v-model="respuesta" placeholder="Escribe tu respuesta aquí (solo el mensaje)"></textarea>
          <button @click="sendResponse">Enviar Respuesta</button>
        </div>
        <div v-if="loading" class="loading-overlay">
          <div class="loading-indicator">Enviando respuesta...</div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="prevPage">« Anterior</button>
      <span> &nbsp; Página {{ currentPage }} - {{ presupuestos.length }} de {{ totalPresupuestos }} presupuestos &nbsp;</span>
      <button :disabled="!hasMoreData" @click="nextPage">Siguiente »</button>
    </div>

    <Footer />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
definePageMeta({
  middleware: 'admin'
});

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      presupuestos: [],
      selectedPresupuesto: null,
      respuesta: '',
      currentPage: 1,
      pageSize: 20,
      hasMoreData: true,
      totalPresupuestos: 0,
      showModal: false,
      loading: false,
      selectedPresupuestos: []
    };
  },
  created() {
    this.fetchPresupuestos();
  },
  methods: {
    fetchPresupuestos() {
      fetch(`http://localhost/PFC/fetch_presupuestos.php?page=${this.currentPage}&pageSize=${this.pageSize}`)
        .then(response => response.json())
        .then((data) => {
          this.totalPresupuestos = data.total;
          if(data.presupuestos.length < this.pageSize) {
            this.hasMoreData = false;
          } else {
            this.hasMoreData = true;
          }
          this.presupuestos = data.presupuestos;
        })
        .catch((error) => {
          console.error('Error fetching presupuestos:', error);
        });
    },
    selectPresupuesto(presupuesto) {
      this.selectedPresupuesto = presupuesto;
      this.showModal = true;
    },
    sendResponse() {
      this.loading = true;
      const data = {
        id: this.selectedPresupuesto.id,
        respuesta: this.respuesta
      };

      fetch('http://localhost/PFC/enviar_presupuesto.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then((data) => {
          this.loading = false;
          if(data.success) {
            alert('Respuesta enviada correctamente');
            this.selectedPresupuesto = null;
            this.respuesta = '';
            this.showModal = false;
            this.fetchPresupuestos(); // Actualizar la lista de presupuestos después de enviar la respuesta
          } else {
            alert('Error al enviar la respuesta: ' + data.message);
          }
        })
        .catch((error) => {
          this.loading = false;
          console.error('Error al enviar la respuesta:', error);
        });
    },
    moveToTrash(id) {
      fetch('http://localhost/PFC/move_to_trash_presupuesto.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })
        .then(response => response.json())
        .then((data) => {
          if(data.success) {
            alert('Presupuesto movido a la papelera');
            this.fetchPresupuestos();
          } else {
            alert('Error al mover el presupuesto a la papelera: ' + data.message);
          }
        })
        .catch((error) => {
          console.error('Error al mover el presupuesto a la papelera:', error);
        });
    },
    bulkMoveToTrash() {
      fetch('http://localhost/PFC/bulk_trash_presupuesto.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ids: this.selectedPresupuestos })
      })
        .then(response => response.json())
        .then((data) => {
          if(data.success) {
            alert('Presupuestos movidos a la papelera');
            this.selectedPresupuestos = [];
            this.fetchPresupuestos();
          } else {
            alert('Error al mover los presupuestos a la papelera: ' + data.message);
          }
        })
        .catch((error) => {
          console.error('Error al mover los presupuestos a la papelera:', error);
        });
    },
    prevPage() {
      if(this.currentPage > 1) {
        this.currentPage--;
        this.fetchPresupuestos();
      }
    },
    nextPage() {
      if(this.hasMoreData) {
        this.currentPage++;
        this.fetchPresupuestos();
      }
    },
    closeModal() {
      this.showModal = false;
      this.selectedPresupuesto = null;
      this.respuesta = '';
    }
  }
};
</script>

<style scoped>
.admin-container {
  padding: 20px;
  max-width: 90%;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}
.presupuesto-card {
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.3s ease;
}
.presupuesto-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.presupuesto-details {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.presupuesto-details p {
  margin: 5px 0;
  color: #555;
}
.presupuesto-details .fecha-llegada {
  margin-left: auto;
  padding-left: 20px;
  text-align: right;
  color: #888;
}
.buttons {
  display: flex;
  gap: 10px;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #0056b3;
}
.reply-section {
  margin-top: 20px;
}
textarea {
  width: 100%;
  height: 100px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
}
.pagination {
  position: fixed;
  bottom: 0;
  width: 100%;
  color: white;
  font-weight: bold;
  background-color: #292929;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
}
.pagination button {
  margin: 0 10px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.pagination button:disabled {
  background-color: #555;
  cursor: not-allowed;
}
.pagination button:hover:not(:disabled) {
  background-color: #0056b3;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  position: relative;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
}
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.loading-indicator {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.bulk-actions {
  display: flex;
  justify-content: center;
  padding: 20px;
}
.bulk-actions button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.bulk-actions button:disabled {
  background-color: #555;
  cursor: not-allowed;
}
.bulk-actions button:hover:not(:disabled) {
  background-color: #0056b3;
}
.trash-link {
  color: #007bff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #f7f7f7;
  border: 1px solid #007bff;
  margin-left: 10px;
}
.trash-link:hover {
  background-color: #007bff;
  color: white;
}
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}
</style>
