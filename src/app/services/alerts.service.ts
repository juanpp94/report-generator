import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  /**
   * Method that set the alert error messages
   * @param message 
   */
  setErrorMessage(message: string): void {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  }

/**
 * Method that set the alert success messages
 * @param message 
 */
  setSuccessfulMessage(messageAux: string, titleAux: string): void {
    Swal.fire({
      icon: "success",
      title: titleAux,
      text: messageAux
    });
  }
}
