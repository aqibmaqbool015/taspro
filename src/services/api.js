import axiosInstance from './axiosInstance';

export const fetchCategories = async () => {
    const response = await axiosInstance.get('/api/v1/category/getAll');
    return response.data.data || [];
};

export const fetchSubcategories = async (categoryId) => {
    const response = await axiosInstance.get(`/api/v1/subCategory/getAllSubcategoriesByCategoryId/${categoryId}`);
    return response.data.data || [];
};

export const fetchServicesBySubcategory = async (subcategoryId) => {
    const response = await axiosInstance.get(`/api/v1/service/getAllBySubCategory/${subcategoryId}`);
    return response.data.data || [];
};

export const fetchUserAddress = async () => {
    const response = await axiosInstance.get('/api/v1/address');
    return response.data.data || [];
};

export const placeOrder = async (orderData) => {
    try {
        const response = await axiosInstance.post('/api/v1/placeOrder', orderData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to place order');
    }
};

export const fetchAddressById = async (addressId) => {
    const response = await axiosInstance.get(`/api/v1/address/${addressId}`);
    return response.data.data;
};

export const fetchOrderById = async (orderId) => {
    const response = await axiosInstance.get(`/api/v1/placeOrder/order/${orderId}`);
    return response.data.data;
};

export const markOrderAsCheckOut = async ({ orderId, modeOfPayment }) => {
    const response = await axiosInstance.post('/api/v1/placeOrder/markOrderAsCheckOut', {
        orderId,
        modeOfPayment,
    });
    return response.data;
};

