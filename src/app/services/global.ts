// src/app/services/global.ts (o la ubicación actual)
import { environment } from 'src/environments/environment'; // Asegúrate que la ruta sea correcta

export var Global = {
    url: environment.apiUrl || 'http://localhost:3900/api/'
    // Si no usas el 'apiUrl' en environment.ts, puedes usar el fallback local aquí.
};