import React, { useEffect, useState } from 'react';
import { PopupButton } from "react-calendly";
import { useHistory, useLocation } from 'react-router-dom';
import Divider from '../components/divider';
import Footer from '../components/footer';


const UserAgreement = () => {
  const history = useHistory();
  const location = useLocation();
  const { url, message } = location.state;

  const [isChecked, setIsChecked] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const { firstName, lastName, email } = personalInfo;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
      if(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && firstName.length > 1 && lastName.length > 1 && isChecked){
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
  }, [formIsValid, isChecked, firstName, lastName, email]);

  const handleCheckbox = (e) => {
    setIsChecked(!isChecked);
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const completeHandler = (e) => {
    history.go('/');
  };

  return (
    <div className='h-100'>
      <h2 className="h-100 pt-5">User Agreement</h2>
      <Divider />
      <form>
        <div id="termsConditions" className="col-med-12">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis dolorem, ipsa quas iste eius quidem nisi. Non, nam. Accusamus nemo ducimus dignissimos quibusdam molestias similique sit laborum. Totam, optio voluptate commodi veritatis obcaecati est qui perspiciatis blanditiis corrupti numquam quidem quaerat minima enim sunt quia a quam temporibus velit sint! Excepturi at necessitatibus laboriosam esse est modi enim facilis. Repellendus asperiores itaque at fuga eos officia vero eius harum! Recusandae necessitatibus, praesentium magnam sunt optio reprehenderit, sit autem, minus voluptatem ad debitis nesciunt? Assumenda, deleniti, omnis veniam distinctio nemo itaque in earum placeat qui totam corrupti impedit! Ex, nisi!</p>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio deserunt nihil necessitatibus quos aliquid tenetur officiis. Earum at beatae quia ullam tempore ipsa deleniti, maxime asperiores, placeat alias corrupti voluptas cumque labore repellat blanditiis ea, accusantium amet. Quisquam animi aliquam natus, quos molestias placeat odio consequatur amet illo eum vero necessitatibus cumque omnis neque sunt ipsam ad unde quod dicta perspiciatis! Veniam iusto nihil accusantium autem eius. At necessitatibus iste corporis repellat alias cumque quod, commodi iusto totam quo, cupiditate atque id incidunt, assumenda recusandae? Voluptates, porro eos, sunt quae, itaque provident ad numquam non ipsum quia doloribus similique veritatis tempore nobis ut quidem. Nulla totam alias quo quidem doloribus natus deserunt vero vel magni cumque architecto deleniti harum quasi, distinctio quod molestiae ea voluptas! Officia tempore ipsum, earum iusto excepturi ex id enim quos culpa cum nam perspiciatis totam alias. Voluptatibus sit aliquam, qui omnis itaque non nam rerum, dolorem ut animi doloremque molestias asperiores nisi mollitia unde modi earum harum repellendus fugit libero incidunt! Libero enim dolore inventore rerum hic possimus cupiditate assumenda corporis, ducimus ut odit sapiente fuga nobis quod non maiores nihil consectetur minima esse. Similique cum sit voluptatibus, beatae commodi doloremque vitae non optio doloribus.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis dolorem, ipsa quas iste eius quidem nisi. Non, nam. Accusamus nemo ducimus dignissimos quibusdam molestias similique sit laborum. Totam, optio voluptate commodi veritatis obcaecati est qui perspiciatis blanditiis corrupti numquam quidem quaerat minima enim sunt quia a quam temporibus velit sint! Excepturi at necessitatibus laboriosam esse est modi enim facilis. Repellendus asperiores itaque at fuga eos officia vero eius harum! Recusandae necessitatibus, praesentium magnam sunt optio reprehenderit, sit autem, minus voluptatem ad debitis nesciunt? Assumenda, deleniti, omnis veniam distinctio nemo itaque in earum placeat qui totam corrupti impedit! Ex, nisi!</p>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio deserunt nihil necessitatibus quos aliquid tenetur officiis. Earum at beatae quia ullam tempore ipsa deleniti, maxime asperiores, placeat alias corrupti voluptas cumque labore repellat blanditiis ea, accusantium amet. Quisquam animi aliquam natus, quos molestias placeat odio consequatur amet illo eum vero necessitatibus cumque omnis neque sunt ipsam ad unde quod dicta perspiciatis! Veniam iusto nihil accusantium autem eius. At necessitatibus iste corporis repellat alias cumque quod, commodi iusto totam quo, cupiditate atque id incidunt, assumenda recusandae? Voluptates, porro eos, sunt quae, itaque provident ad numquam non ipsum quia doloribus similique veritatis tempore nobis ut quidem. Nulla totam alias quo quidem doloribus natus deserunt vero vel magni cumque architecto deleniti harum quasi, distinctio quod molestiae ea voluptas! Officia tempore ipsum, earum iusto excepturi ex id enim quos culpa cum nam perspiciatis totam alias. Voluptatibus sit aliquam, qui omnis itaque non nam rerum, dolorem ut animi doloremque molestias asperiores nisi mollitia unde modi earum harum repellendus fugit libero incidunt! Libero enim dolore inventore rerum hic possimus cupiditate assumenda corporis, ducimus ut odit sapiente fuga nobis quod non maiores nihil consectetur minima esse. Similique cum sit voluptatibus, beatae commodi doloremque vitae non optio doloribus.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis dolorem, ipsa quas iste eius quidem nisi. Non, nam. Accusamus nemo ducimus dignissimos quibusdam molestias similique sit laborum. Totam, optio voluptate commodi veritatis obcaecati est qui perspiciatis blanditiis corrupti numquam quidem quaerat minima enim sunt quia a quam temporibus velit sint! Excepturi at necessitatibus laboriosam esse est modi enim facilis. Repellendus asperiores itaque at fuga eos officia vero eius harum! Recusandae necessitatibus, praesentium magnam sunt optio reprehenderit, sit autem, minus voluptatem ad debitis nesciunt? Assumenda, deleniti, omnis veniam distinctio nemo itaque in earum placeat qui totam corrupti impedit! Ex, nisi!</p>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio deserunt nihil necessitatibus quos aliquid tenetur officiis. Earum at beatae quia ullam tempore ipsa deleniti, maxime asperiores, placeat alias corrupti voluptas cumque labore repellat blanditiis ea, accusantium amet. Quisquam animi aliquam natus, quos molestias placeat odio consequatur amet illo eum vero necessitatibus cumque omnis neque sunt ipsam ad unde quod dicta perspiciatis! Veniam iusto nihil accusantium autem eius. At necessitatibus iste corporis repellat alias cumque quod, commodi iusto totam quo, cupiditate atque id incidunt, assumenda recusandae? Voluptates, porro eos, sunt quae, itaque provident ad numquam non ipsum quia doloribus similique veritatis tempore nobis ut quidem. Nulla totam alias quo quidem doloribus natus deserunt vero vel magni cumque architecto deleniti harum quasi, distinctio quod molestiae ea voluptas! Officia tempore ipsum, earum iusto excepturi ex id enim quos culpa cum nam perspiciatis totam alias. Voluptatibus sit aliquam, qui omnis itaque non nam rerum, dolorem ut animi doloremque molestias asperiores nisi mollitia unde modi earum harum repellendus fugit libero incidunt! Libero enim dolore inventore rerum hic possimus cupiditate assumenda corporis, ducimus ut odit sapiente fuga nobis quod non maiores nihil consectetur minima esse. Similique cum sit voluptatibus, beatae commodi doloremque vitae non optio doloribus.</p>
        </div>
        <div className='row col-12 pt-4 justify-content-between m-auto'>
          <div className="col-12 col-md-4 mb-2 form-floating text-dark">
            <input type="text" className="form-control" name='firstName' id="firstName" value={firstName} onChange={onChange} placeholder='First Name' required />
            <label for="firstName" className='mx-2'>First Name (dark text)</label>
          </div>
          <div className="col-12 col-md-4 mb-2 form-floating">
            <input type="text" className="form-control" name='lastName' id="lastName" value={lastName} onChange={onChange} placeholder='Last Name' required />
            <label for="lastName" className='mx-2'>Last Name (Default lighter text)</label>
          </div>
          <div className="col-12 col-md-4 mb-2 form-floating">
            <input type="email" className="form-control" name='email' id="email" value={email.length ? email : null} onChange={onChange} placeholder='Email Address' required />
            <label for="email" className='mx-2'>Email Address</label>
          </div>
        </div>
        
        <div className="col-12">
          <div className="form-check text-start mt-3 d-flex justify-content-center justify-content-md-start">
            <input className="form-check-input ms-md-0 me-2" type="checkbox" value="" id="termsConditionsCheckbox" checked={isChecked} onChange={handleCheckbox} required />
            <label className="form-check-label" for="termsConditionsCheckbox">
              I agree to the terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12 mt-3 mb-5">
        { formIsValid ? 
        (<PopupButton
              onClick={completeHandler}
              className='btn btn-primary'
              text='Submit'
              url={url}
              prefill={{
                firstName,
                lastName,
                name: `${firstName} ${lastName}`,
                email,
                customAnswers: {
                  a1: `I am looking to${message ? ` ${message}` : '...'}`
                }
              }}
            />) :
            (
              <button type="button" className='btn btn-outline-info fw-bold' disabled autoFocus>Submit</button>
            )}
        </div>
      </form>
      <Divider/>
      <Footer />
    </div>
  )
}

export default UserAgreement
