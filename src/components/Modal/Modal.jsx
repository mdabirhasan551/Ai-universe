import React from 'react';

const Modal = (props) => {

  const { id, image_link, name, description, integrations, features, input_output_examples } = props.singleData;
  const featureValues = Object.values(features || {});
  input_output_examples?.map(inOut => {
    console.log(inOut.input)
  })

  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card card-side bg-base-100 gap-4">

            <div className="card-body w-0.5 border-2 border-error rounded-md bg-red-100/50">
              <h2 className="card-title">{description ? description : 'Not Found'}</h2>

              <div className='flex justify-between gap-10'>
                <div>
                  <h1 className='3xl font-bold'>Features</h1>
                  {
                    featureValues?.map(featureValue => (
                      <ul className='list-disc'><li>{featureValue.feature_name}</li></ul>
                    )
                    )
                  }
                </div>
                <div>
                  <h1 className='3xl font-bold'>Integrations</h1>
                  {
                    (integrations || []).map((integration) => (
                      <ul className='list-disc'><li>{integration}</li></ul>
                    ))
                  }
                </div>
              </div>

            </div>
            <div className="card-body w-0.5 border-2 border-error rounded-md bg-red-100/50">
              <figure><img className='w-full h-64' src={image_link ? image_link[0] : 'Not Found'} /></figure>
              {
                input_output_examples?.map(inOut => {
                  <><h1>{inOut.input}</h1><p>{inOut.output}</p></>
                })
              }
            </div>

          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="bg-red-200 text-red-500 rounded-full p-1 absolute h-8 w-8 -right-0 -top-0 ">✕</button>
            </form>

          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;