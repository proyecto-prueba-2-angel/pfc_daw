<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div>
      <Header />
      <AdminButton />
      <div class="admin-container mx-auto">
        <h1>Papelera de Presupuestos</h1>
        <div class="bulk-actions">
          <button :disabled="selectedPresupuestos.length === 0" @click="bulkDeletePresupuestos">Eliminar Seleccionados <font-awesome-icon icon="trash" /></button>
          <button :disabled="selectedPresupuestos.length === 0" @click="bulkRestorePresupuestos">Restaurar Seleccionados <font-awesome-icon icon="trash-arrow-up" /></button>
          <router-link to="/administrador/adminPresupuesto" class="trash-link">Volver a Solicitudes de Presupuesto</router-link>
        </div>
        <div v-for="presupuesto in presupuestos" :key="presupuesto.id" class="presupuesto-card">
          <div class="presupuesto-details">
            <input v-model="selectedPresupuestos" type="checkbox" :value="presupuesto.id" />
            <p><strong>De:</strong> {{ presupuesto.nombre }} {{ presupuesto.apellidos }} ({{ presupuesto.email }})</p>
            <p><strong>Teléfono:</strong> {{ presupuesto.telefono }}</p>
            <p><strong>Mensaje:</strong> {{ presupuesto.descripcion }}</p>
            <p class="fecha-llegada"><strong>Fecha de Llegada:</strong> {{ presupuesto.fecha_llegada }}</p>
            <div class="buttons">
              <button @click="deletePresupuesto(presupuesto.id)">Eliminar <font-awesome-icon icon="trash" /></button>
              <button @click="restorePresupuesto(presupuesto.id)">Restaurar <font-awesome-icon icon="undo" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="pagination">
        <button :disabled="currentPage === 1" @click="prevPage">« Anterior</button>
        <span> &nbsp; Página {{ currentPage }} - {{ presupuestos.length }} de {{ totalPresupuestos }} presupuestos &nbsp;</span>
        <button :disabled="!hasMoreData" @click="nextPage">Siguiente »</button>
      </div>
      <Footer />
    </div>
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
      selectedPresupuestos: [],
      currentPage: 1,
      pageSize: 20,
      hasMoreData: true,
      totalPresupuestos: 0
    };
  },
  created() {
    this.fetchPresupuestos();
  },
  mounted() {
    this.updateHead();
  },
  methods: {
    updateHead() {
      document.title = 'Papelera de Presupuestos - Eurostone';
      const descriptionContent = 'Eliminar o restaurar las solicitudes de presupuesto.';
      let descriptionMetaTag = document.querySelector('meta[name="description"]');
      if(!descriptionMetaTag) {
        descriptionMetaTag = document.createElement('meta');
        descriptionMetaTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionMetaTag);
      }
      descriptionMetaTag.setAttribute('content', descriptionContent);
    },
    fetchPresupuestos() {
      fetch(`http://localhost/PFC/fetch_trash_presupuestos.php?page=${this.currentPage}&pageSize=${this.pageSize}`)
        .then(response => response.json())
        .then((data) => {
          if(data.success) {
            this.totalPresupuestos = data.total;
            if(data.presupuestos.length < this.pageSize) {
              this.hasMoreData = false;
            } else {
              this.hasMoreData = true;
            }
            this.presupuestos = data.presupuestos;
          } else {
            console.error('Error fetching presupuestos:', data.message);
          }
        })
        .catch((error) => {
          console.error('Error fetching presupuestos:', error);
        });
    },
    deletePresupuesto(id) {
      fetch('http://localhost/PFC/delete_presupuesto.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })
        .then(response => response.json())
        .then((data) => {
          if(data.success) {
            alert('Presupuesto eliminado');
            this.fetchPresupuestos();
          } else {
            alert('Error al eliminar el presupuesto: ' + data.message);
          }
        })
        .catch((error) => {
          console.error('Error al eliminar el presupuesto:', error);
        });
    },
    restorePresupuesto(id) {
      fetch('http://localhost/PFC/restore_presupuesto.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })
        .then(response => response.json())
        .then((data) => {
          if(data.success) {
            alert('Presupuesto restaurado');
            this.fetchPresupuestos();
          } else {
            alert('Error al restaurar el presupuesto: ' + data.message);
          }
        })
        .catch((error) => {
          console.error('Error al restaurar el presupuesto:', error);
        });
    },
    bulkDeletePresupuestos() {
      fetch('http://localhost/PFC/bulk_delete_presupuesto.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ids: this.selectedPresupuestos })
      })
        .then(response => response.json())
        .then((data) => {
          if(data.success) {
            alert('Presupuestos eliminados');
            this.selectedPresupuestos = [];
            this.fetchPresupuestos();
          } else {
            alert('Error al eliminar los presupuestos: ' + data.message);
          }
        })
        .catch((error) => {
          console.error('Error al eliminar los presupuestos:', error);
        });
    },
    bulkRestorePresupuestos() {
      fetch('http://localhost/PFC/bulk_restore_presupuesto.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ids: this.selectedPresupuestos })
      })
        .then(response => response.json())
        .then((data) => {
          if(data.success) {
            alert('Presupuestos restaurados');
            this.selectedPresupuestos = [];
            this.fetchPresupuestos();
          } else {
            alert('Error al restaurar los presupuestos: ' + data.message);
          }
        })
        .catch((error) => {
          console.error('Error al restaurar los presupuestos:', error);
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
.pagination {
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
.bulk-actions {
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 10px;
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
</style>
