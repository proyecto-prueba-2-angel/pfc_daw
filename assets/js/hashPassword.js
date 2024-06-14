import { hash as _hash } from 'bcrypt';

const password = 'escalope23';
const saltRounds = 10;

_hash(password, saltRounds, function(err, hash) {
  if(err) {
    console.error('Error al hashear la contraseña:', err);
  } else {
    console.log('Contraseña hasheada:', hash);
  }
});
