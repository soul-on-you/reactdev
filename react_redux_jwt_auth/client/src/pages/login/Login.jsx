import React from "react";
import LoginForm from "../../components/login/LoginForm";

function Login() {
  //   const emailRef = useRef();
  //   const errRef = useRef();

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [errorMsg, setErrorMsg] = useState("");

  //   const navigate = useNavigate();

  //   const [fetch_login, { data, isLoading, error }] = useLoginMutation();
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     emailRef.current.focus();
  //   }, []);

  //   useEffect(() => {
  //     setErrorMsg("");
  //   }, [email, password]);

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const { data } = await fetch_login({
  //         variables: {
  //           email,
  //           password: password,
  //         },
  //       }).unwrap();

  //       console.log(data);
  //     } catch (e) {
  //       console.error(e);
  //     }

  //     // if (data) {
  //     //   dispatch(login(data));
  //     //   navigate("/");
  //     // }
  //   };

  //   const onFinish = (values) => {
  //     console.log("Success:", values);
  //   };

  //   const onFinishFailed = (errorInfo) => {
  //     console.log("Failed:", errorInfo);
  //   };

  return (
    <div>
      <LoginForm
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      // autoComplete="off"
      />
    </div>
  );
}

export default Login;
