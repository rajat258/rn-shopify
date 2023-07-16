import {useRef} from 'react';

const useCustomRef = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  const mobileRef = useRef();
  const addressRef = useRef();
  const pincodeRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();

  return {
    emailRef,
    passwordRef,
    confirmPasswordRef,
    nameRef,
    mobileRef,
    addressRef,
    pincodeRef,
    cityRef,
    stateRef,
  };
};

export default useCustomRef;
