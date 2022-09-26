import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GroupService from './../../services/groupService';
import ContactService from './../../services/contactService';
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-toastify';

function AddContact() {
    const [state, setState] = useState({
        loading: false,
        groups: [],
        errorMessage: ''
    })

    const [contact, setContact] = useState({
        name: '',
        photoUrl: '',
        mobile: '',
        email: '',
        company: '',
        title: '',
        groupId: 0
    })

    const navigate = useNavigate();

    useEffect(() => {
        try {
            setState({ ...state, loading: true });
            async function getData() {
                let groupRes = await GroupService.getGroups();
                setState({
                    ...state,
                    loading: false,
                    groups: groupRes.data
                })
            }
            getData();
        } catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        }
    }, [])

    const handleInputValue = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setState({ ...state, loading: true });
            async function postData() {
                let result = await ContactService.createContact(contact)
                if (result.data) {
                    toast.success("Contact created successfully.");
                    setState({ ...state, loading: false });
                    navigate("/cg-contact/contact/list", { replace: true });
                }
            }
            postData();
        } catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
            toast.error(error.message);
        }
    }

    const { loading, groups, errorMessage } = state;
    return (
        <>
            <section className='create-contact-info'>
                <div className="container">
                    <h3 className="fw-bolder text-success">Create Contact</h3>
                    <p className="fst-italic">Anim id aliqua cillum duis. Amet consequat incididunt culpa non. Aute ea tempor officia elit ut. Cupidatat proident amet est dolore exercitation nisi reprehenderit deserunt laboris labore consectetur excepteur veniam.</p>
                </div>
            </section>
            <section className='create-contact'>
                {
                    loading ? <Spinner /> : (
                        <div className='container'>
                            <div className='row'>
                                <div className='col-4'>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-2">
                                            <input type="text" className="form-control" placeholder="Name" name="name" onInput={handleInputValue} />
                                        </div>
                                        <div className="mb-2">
                                            <input type="url" className="form-control" placeholder="Photo URL" name="photoUrl" onInput={handleInputValue} />
                                        </div>
                                        <div className="mb-2">
                                            <input type="tel" className="form-control" placeholder="Mobile" name="mobile" onInput={handleInputValue} />
                                        </div>
                                        <div className="mb-2">
                                            <input type="email" className="form-control" placeholder="Email" name="email" onInput={handleInputValue} />
                                        </div>
                                        <div className="mb-2">
                                            <input type="text" className="form-control" placeholder="Company" name="company" onInput={handleInputValue} />
                                        </div>
                                        <div className="mb-2">
                                            <input type="text" className="form-control" placeholder="Title" name="title" onInput={handleInputValue} />
                                        </div>
                                        <div className="mb-2">
                                            <select className='form-control' name='groupId' onChange={handleInputValue}>
                                                <option value={-1} key={-1} disabled selected>Select a Group</option>
                                                {
                                                    groups.map((group) => (
                                                        <option value={group.id} key={group.id}>{group.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <button type='submit' className='btn btn-success me-2'>Create</button>
                                            <Link to={"/cg-contact/contact/list"} className="btn btn-dark">Close</Link>
                                        </div>
                                    </form>
                                </div>
                                <div className='col-4'>
                                    <img className='img-thumbnail w-100' src={contact.photoUrl} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
        </>
    );
}

export default AddContact;
