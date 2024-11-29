import Adminlayout from '../../../components/AdminLayout';
import './categories.css';

import { Table } from "antd";

import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import moment from "moment";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {

    const navigate = useNavigate();
    
    const [categories , setCategories] = useState([]);

    const getCategories = async () => {
        const dbResponse = await axios.get('http://localhost:3001/topics');
        setCategories(dbResponse.data);
    };

    useEffect(()=> {
        getCategories()
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
            render : (id) => { return <a>{id}</a>}
        },
        {
            title: 'Category',
            dataIndex: 'topicName',
            key: 'topicName',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render : (image)=>{ return <img src={image} className='table-image'/>}
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render : (date)=> { return moment(date).format('MM/DD/YYYY') }
        },
        {
            title: 'Edit',
            dataIndex: '_id',
            key: 'edit',
            render : (id) => { return <FontAwesomeIcon icon={faPencil}  />}
        },
        {
            title: 'Delete',
            dataIndex: '_id',
            key: 'delete',
            render : (id) => { return <FontAwesomeIcon icon={faTrash}  onClick={()=>{onDeleteDepartment(id)}}/>}
        },
        ];

    return (
        <>
            <Adminlayout>
                <div className="data-container">
                    <div className="add-btn-container">
                        <button className='add-button' onClick={ () => { 
                            navigate('/admin/add-category')
                        }}>Add Department</button>
                    </div>

                    <Table dataSource={categories}  columns={columns} />
                </div>
                
            </Adminlayout>
        </>
    );
}

export default Categories;