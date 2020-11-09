import React, { Component } from 'react'
import a from'./Styles/CreateUser.css'
export default class Navigation extends Component {
    render() {
        return (
            < div>
             <nav>
          <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="/User/:id">Usuario</a></li>
            <li class="submenu"><a href="#">Notas</a><i class="far fa-caret-square-down more"></i><ul>
                <li><a href="/Note/:id">Notas Generales</a></li>
            </ul></li>
            <li><a href="#">Contacto</a></li>
             </ul>
             </nav>
            </div>
        )
    }
}

