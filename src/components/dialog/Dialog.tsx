import './Dialog.css';

function Dialog(){
    return(
        <>
        <button type="button" className="btn-solid theme-primary" data-bs-toggle="dialog" data-bs-target="#slideDownDialog">
        Slide down dialog
        </button>
        <dialog className="dialog dialog-slide-down" id="slideDownDialog">
        <div className="dialog-header">
        <h1 className="dialog-title">Slide down dialog</h1>
        <button type="button" className="btn-close" data-bs-dismiss="dialog" aria-label="Close"></button>
        </div>
        <div className="dialog-body">
        <p>This dialog slides down from the top of the viewport.</p>
        </div>
        <div className="dialog-footer">
        <button type="button" className="btn-solid theme-secondary" data-bs-dismiss="dialog">Close</button>
        <button type="button" className="btn-solid theme-primary">Save changes</button>
        </div>
        </dialog>
        </>
    )
}

export default Dialog;