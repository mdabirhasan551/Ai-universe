import React from 'react';

const Button = (props) => {
  return (
    <div className='text-center my-4'>
      <button className="btn btn-error"><p className='text-base font-bold text-white hover:text-yellow-400'>{props.children}</p></button>
    </div>
  );
};

export default Button;