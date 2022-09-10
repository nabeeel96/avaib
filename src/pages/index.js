import React, { useState } from 'react';

function Main() {
  const [fullName, setFullName] = useState('');
  const [marks, setMarks] = useState('');
  const [feesPaid, setFeesPaid] = useState('');

  const [data, setData] = useState([
    {
      fullName: 'Syed Farhan Ali Rizvi',
      marks: 60,
      feesPaid: 'Yes',
    },
    {
      fullName: 'Abdul Qadeer',
      marks: 33,
      feesPaid: 'No',
    },
    {
      fullName: 'Anas Ahmed',
      marks: 59,
      feesPaid: 'No',
    },
    {
      fullName: 'Ali Hasnain',
      marks: 49,
      feesPaid: 'No',
    },
  ]);

  const handleForm = (e) => {
    e.preventDefault();
    const formData = {
      fullName,
      marks,
      feesPaid,
    };
    setData([...data, formData]);
    setFullName('');
    setMarks('');
    setFeesPaid('');
  };

  return (
    <div>
      <div className='top-container'>
        <form onSubmit={handleForm}>
          <table>
            <tr>
              <td width={250} align='end'>
                Passing Marks :
              </td>
              <td width={250}>60/100</td>
            </tr>
            <tr>
              <td width={250} align='end'>
                <label for='Full Name'>Full Name :</label>
              </td>
              <td width={250}>
                <input
                  type={'text'}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td width={250} align='end'>
                <label for='Marks'>Marks :</label>
              </td>
              <td width={250}>
                <input
                  type={'text'}
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td width={250} align='end'>
                <label for='Marks'>Marks :</label>
              </td>
              <td width={250}>
                <>
                  <input
                    type='radio'
                    name='feePaid'
                    value='Yes'
                    onChange={(e) => setFeesPaid(e.target.value)}
                  />
                  <label htmlFor='Yes'>Yes</label>
                  <input
                    type='radio'
                    name='feePaid'
                    value='No'
                    onChange={(e) => setFeesPaid(e.target.value)}
                  />
                  <label htmlFor='No'>No</label>
                </>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type='submit' value='Submit Data' />
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div className='main-container'>
        <input type={'button'} value='Delete' className='button' />
        <table border={1} width={700}>
          <tr>
            <td className='bg-blue' width={30}></td>
            <td className='bg-blue' width={150}>
              Full Name
            </td>
            <td className='bg-blue'>Marks</td>
            <td className='bg-blue'>Fee Paid</td>
            <td className='bg-blue'>Pass/Fail</td>
            <td className='bg-blue'>Edit</td>
          </tr>
          {data.map((val) => (
            <tr className='result-header'>
              <td align='center'>
                <input type={'checkbox'} value={val.fullName} />
              </td>
              <td>{val.fullName}</td>
              <td>{val.marks}</td>
              <td>{val.feesPaid}</td>
              <td
                style={{
                  fontWeight: val.marks < 60 ? 'bold' : 'normal',
                  color: val.marks < 60 ? 'Red' : 'green',
                }}
              >
                {val.marks >= 60 ? 'Pass' : 'Fail'}
              </td>
              <td width={50} align='center'>
                <a href='#'>Edit</a>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Main;
