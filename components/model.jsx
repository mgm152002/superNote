
'use client'
export default function Modal() {
    return(
        <>
            <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}>Add</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-black">New Note</h3>
    <p className="py-4 text-black">hi</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-primary">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </>

    )
}