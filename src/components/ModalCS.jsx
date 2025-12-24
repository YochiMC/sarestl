function ModalCerrarSesion({ onConfirmar, onCancelar }) {
    return (
        <div className="modal-overlay-cierre">
            <div className="modal-cierre">
                <p className="modal-titulo-cirre">
                    ¿Está seguro de cerrar sesión?
                </p>

                <div className="modal-botones-cierre">
                    <button
                        className="btn-confirmar-cierre"
                        onClick={onConfirmar}
                    >
                        Aceptar
                    </button>

                    <button
                        className="btn-cancelar-cierre"
                        onClick={onCancelar}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalCerrarSesion;
