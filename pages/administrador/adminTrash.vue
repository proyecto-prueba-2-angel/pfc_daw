<template>
  <div>
    <Header />
    <AdminButton />

    <div class="admin-container mx-auto">
      <h1>Papelera de Contactos</h1>
      <div class="bulk-actions">
        <button :disabled="selectedContacts.length === 0" @click="bulkDeleteContacts">Eliminar Seleccionados <font-awesome-icon icon="trash" /></button>
        <button :disabled="selectedContacts.length === 0" @click="bulkRestoreContacts">Restaurar Seleccionados <font-awesome-icon icon="undo" /></button>
        <router-link to="/administrador/adminContacto" class="trash-link">Volver a Solicitudes de Contacto</router-link>
      </div>
      <div v-for="contact in contacts" :key="contact.id" class="contact-card">
        <div class="contact-details">
          <input v-model="selectedContacts" type="checkbox" :value="contact.id" />
          <p><strong>De:</strong> {{ contact.nombre }} {{ contact.apellido }} ({{ contact.email }})</p>
          <p><strong>Teléfono:</strong> {{ contact.telefono }}</p>
          <p><strong>Mensaje:</strong> {{ contact.mensaje }}</p>
          <p class="fecha-llegada"><strong>Fecha de Llegada:</strong> {{ contact.fecha_llegada }}</p>
          <div class="buttons">
            <button @click="deleteContact(contact.id)">Eliminar <font-awesome-icon icon="trash" /></button>
            <button @click="restoreContact(contact.id)">Restaurar <font-awesome-icon icon="undo" /></button>
          </div>
        </div>
      </div>

      <div class="pagination">
        <button :disabled="currentPage === 1" @click="prevPage">« Anterior</button>
        <span> &nbsp; Página {{ currentPage }} - {{ contacts.length }} de {{ totalContacts }} contactos &nbsp;</span>
        <button :disabled="!hasMoreData" @click="nextPage">Siguiente »</button>
      </div>
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
      contacts: [],
      selectedContacts: [],
      currentPage: 1,
      pageSize: 20,
      hasMoreData: true,
      totalContacts: 0
    };
  },
  created() {
    this.fetchContacts();
  },
  methods: {
    fetchContacts() {
      fetch(`http://localhost/PFC/fetch_trash_contacts.php?page=${this.currentPage}&pageSize=${this.pageSize}`)
        .then(response => response.json())
        .then((data) => {
          if(data.success) {
            this.totalContacts = data.total;
            if(data.contacts.length < this.pageSize) {
              this.hasMoreData = false;
            } else {
              this.hasMoreData = true;
            }
            this.contacts = data.contacts;
          } else {
            console.error('Error fetching contacts:', data.message);
          }
        })
        .catch((error) => {
          console.error('Error fetching contacts:', error);
        });
    },
    deleteContact(id) {
      fetch('http://localhost/PFC/delete_contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })
        .then(response => response.json())
        .then((data) => {
          if(data.success) {
            alert('Contacto eliminado');
            this.fetchContacts();
          } else {
            alert('Error al eliminar el contacto: ' + data.message);
          }
        })
        .catch((error) => {
          console.error('Error al eliminar el contacto:', error);
        });
    },
    restoreContact(id) {
      fetch('http://localhost/PFC/restore_contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })
        .then(response => response.json())
        .then((data) => {
          if(data.success) {
            alert('Contacto restaurado');
            this.fetchContacts();
          } else {
            alert('Error al restaurar el contacto: ' + data.message);
          }
        })
        .catch((error) => {
          console.error('Error al restaurar el contacto:', error);
        });
    },
    bulkDeleteContacts() {
      fetch('http://localhost/PFC/bulk_delete_contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ids: this.selectedContacts })
      })
        .then(response => response.json())
        .then((data) => {
          if(data.success) {
            alert('Contactos eliminados');
            this.selectedContacts = [];
            this.fetchContacts();
          } else {
            alert('Error al eliminar los contactos: ' + data.message);
          }
        })
        .catch((error) => {
          console.error('Error al eliminar los contactos:', error);
        });
    },
    bulkRestoreContacts() {
      fetch('http://localhost/PFC/bulk_restore_contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ids: this.selectedContacts })
      })
        .then(response => response.json())
        .then((data) => {
          if(data.success) {
            alert('Contactos restaurados');
            this.selectedContacts = [];
            this.fetchContacts();
          } else {
            alert('Error al restaurar los contactos: ' + data.message);
          }
        })
        .catch((error) => {
          console.error('Error al restaurar los contactos:', error);
        });
    },
    prevPage() {
      if(this.currentPage > 1) {
        this.currentPage--;
        this.fetchContacts();
      }
    },
    nextPage() {
      if(this.hasMoreData) {
        this.currentPage++;
        this.fetchContacts();
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
  .contact-card {
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
  .contact-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  .contact-details {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .contact-details p {
    margin: 5px 0;
    color: #555;
  }
  .contact-details .fecha-llegada {
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
