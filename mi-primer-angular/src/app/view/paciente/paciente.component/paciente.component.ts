import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { PacienteService } from '../../../services/paciente.service/paciente.service';
import { PacienteModel } from '../../../models/paciente.model/paciente.model';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paciente.component',
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css',
})
export class PacienteComponent implements OnInit {
  private pacienteService = inject(PacienteService);
  private cdr = inject(ChangeDetectorRef);

  pacientes: PacienteModel[] = [];

  // Objeto para manejar el formulario
  pacienteActual: PacienteModel = {
    nombre: '',
    celular: '',
    fecha_nacimiento: ''
  };

  editando = false;
  /**
   *
   */


  ngOnInit(): void {
    console.log('1. ngOnInit se disparó correctamente al cargar la página');
    this.cargarPacientes();
  }

  // GET ALL
  cargarPacientes(): void {
    console.log('2. Intentando contactar a la API de .NET...');
    this.pacienteService.obtenerPacientes().subscribe({
      next: (data) => {
        console.log('3. ¡Éxito! Datos recibidos de la base de datos:', data);
        this.pacientes = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('X. Error detectado al intentar traer los datos:', err)
    });
  }

  // POST y PUT (Guardar formulario)
  guardarPaciente(): void {
    if (this.editando && this.pacienteActual.id) {
      // Actualizar
      this.pacienteService.actualizarPaciente(this.pacienteActual.id, this.pacienteActual).subscribe({
        next: () => {
          this.cargarPacientes(); // Refrescar lista
          this.resetearFormulario();
          this.cdr.detectChanges();
        },
        error: (err) => console.error('Error al actualizar', err)
      });
    } else {
      // Crear
      this.pacienteService.crearPaciente(this.pacienteActual).subscribe({
        next: () => {
          this.cargarPacientes(); // Refrescar lista
          this.resetearFormulario();
          this.cdr.detectChanges();
        },
        error: (err) => console.error('Error al crear', err)
      });
    }
  }

  // Preparar formulario para editar
  editarPaciente(paciente: PacienteModel): void {
    // Usamos el spread operator {...} para clonar el objeto y no modificar la tabla directamente
    this.pacienteActual = { ...paciente };

    if (this.pacienteActual.fecha_nacimiento) {
      // split('T')[0] toma "1990-05-07T01:45:56.832Z" y devuelve solo "1990-05-07"
      this.pacienteActual.fecha_nacimiento = this.pacienteActual.fecha_nacimiento.split('T')[0];
    }
    this.editando = true;
    this.cdr.detectChanges();
  }

  // DELETE
  eliminarPaciente(id?: number): void {
    if (!id) return; // Validación de seguridad

    if (confirm('¿Estás seguro de que deseas eliminar este paciente?')) {
      this.pacienteService.eliminarPaciente(id).subscribe({
        next: () => this.cargarPacientes(), // Refrescar lista tras eliminar
        error: (err) => console.error('Error al eliminar', err)
      });
      this.cdr.detectChanges();
    }
  }

  // Limpiar vista
  resetearFormulario(): void {
    this.pacienteActual = { nombre: '', celular: '', fecha_nacimiento: '' };
    this.editando = false;
  }

}
