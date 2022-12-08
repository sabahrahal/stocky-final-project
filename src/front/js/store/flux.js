const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl:
				"https://stocky.onrender.com/api",
			token: "",
			user_id: "",
			companies: [],
			suppliers: [],
			products: [],
			selectedCompany: {},
			currentUser: {},
			productsInfo: {},
			customers: [],
			customerOrders: [],
		},
		actions: {
			// ---------------- START USER ACTIONS -------------
			syncToken: async () => {
				const store = getStore();
				const actions = getActions();
				const token = sessionStorage.getItem("token");
				setStore({ token: token })
				const ops = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + token
					}
				}

				try {
					const response = await fetch(`${store.apiUrl}/verify-token-integrity`, ops);
					if (response.ok) {
						const token = sessionStorage.getItem("token");
						const user_id = sessionStorage.getItem("user_id")
						if (token && token != "" && token != undefined) {
							console.log("Sync token...")
							setStore({ user_id: user_id })
						}
					}
					else {
						actions.logOff();
					}
				} catch (error) {
					console.log(error)
					actions.logOff();
				}
			},
			getUser: async () => {
				const store = getStore();
				const token = sessionStorage.getItem("token");
				const ops = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + token
					}
				}

				try {
					const response = await fetch(`${store.apiUrl}/get-user-by-id`, ops);
					if (!response.ok) {
						alert("Get User has a problem with endpoint /get-user-by-id");
						return;
					}

					const body = await response.json();
					setStore({
						currentUser: body
					})

					return body;

				} catch (error) {
					console.log(error)
				}
			},

			logIn: async (username, password) => {
				const store = getStore();
				const actions = getActions();
				const ops = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						username: username,
						password: password,
					}),
				};
				try {
					const response = await fetch(`${store.apiUrl}/login`, ops);
					if (!response.ok) {
						alert("Login problem endpoint /login");
						return;
					}
					const body = await response.json();
					sessionStorage.setItem("token", body.token);
					sessionStorage.setItem("user_id", body.user_id);
					sessionStorage.setItem("authenticated", true);
					actions.syncToken();
					console.log(body.token);
					return true;
				} catch (error) {
					console.log(error);
					return;
				}
			},
			signUp: async (username, password, email, phone) => {
				const store = getStore();
				const actions = getActions();
				const ops = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						username: username,
						password: password,
						email: email,
						phone: phone,
					}),
				};
				try {
					const response = await fetch(`${store.apiUrl}/signup`, ops);
					if (!response.ok) {
						alert("Login problem endpoint /signup");
						return;
					}
					console.log("Su usuario se ha creado correctamente");
					actions.logIn(username, password);
				} catch (error) {
					console.log(error);
				}
			},
			logOff: () => {
				sessionStorage.clear();
				setStore({ token: undefined })
			},
			updateUser: async (username, password, email, phone) => {
				const store = getStore();
				const actions = getActions();
				const ops = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.token
					},
					body: JSON.stringify({
						username: username,
						password: password,
						email: email,
						phone: phone,
					}),
				}
				try {
					const response = await fetch(`${store.apiUrl}/update-user`, ops);
					if (!response.ok) {
						alert("Update user has a problem with endpoint /update-user");
						return;
					}
					console.log(`Update user succefully! ${username}`);
					actions.getUser();
					return true;
				} catch (error) {
					console.log(error)
					return;
				}
			},
			// ---------------- END USER ACTIONS -------------

			// ---------------- START COMPANY ACTIONS -------------
			createCompany: async (name, rif, companyImg) => {
				const store = getStore();
				const ops = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.token
					},
					body: JSON.stringify({
						name: name,
						rif: rif,
						img_url: companyImg,
					}),
				}
				try {
					const response = await fetch(`${store.apiUrl}/create-company`, ops);
					if (!response.ok) {
						alert("Create company problem endpoint /create-company");
						return;
					}
					console.log(`Create a company succefully! ${name}`);
					return true;
				} catch (error) {
					console.log(error)
					return;
				}
			},

			getCompanies: async () => {
				const store = getStore();
				const ops = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.token
					}
				};

				try {
					const response = await fetch(`${store.apiUrl}/companies`, ops);
					if (!response.ok) {
						alert("Get companies problem endpoint /companies");
						return;
					}

					const body = await response.json();
					setStore({
						companies: body
					})

					return body;

				} catch (error) {
					console.log(error)
				}
			},

			selectCompany: async (id) => {
				sessionStorage.setItem(
					"selectedCompanyId",
					id
				)
				const token = sessionStorage.getItem("token");
				const store = getStore();
				const ops = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + token
					}
				};

				try {
					const response = await fetch(`${store.apiUrl}/get-company-by-id/${id}`, ops);
					if (!response.ok) {
						alert("Get company by id problem endpoint /get-company-by-id");
						return;
					}

					const body = await response.json();
					setStore({
						selectedCompany: body
					})

					return body;

				} catch (error) {
					console.log(error)
				}
			},

			syncCompany: () => {
				const actions = getActions();
				const selectedCompanyId = sessionStorage.getItem("selectedCompanyId");
				actions.selectCompany(selectedCompanyId);
			},
			updateCompany: async (name, rif) => {
				const store = getStore();
				const actions = getActions();
				const company_id = sessionStorage.getItem("selectedCompanyId")
				const ops = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.token
					},
					body: JSON.stringify({
						name: name,
						rif: rif,
					}),
				}
				try {
					const response = await fetch(`${store.apiUrl}/update-company/${company_id}`, ops);
					if (!response.ok) {
						alert("Update Company has a problem with endpoint /update-company");
						return;
					}
					console.log(`Update Company succefully! ${name}`);
					actions.syncCompany();
					return true;
				} catch (error) {
					console.log(error)
					return;
				}
			},
			// ---------------- END COMPANY ACTIONS -------------

			// ---------------- START SUPPLIERS ACTIONS -------------
			createSupplier: async (name, phone, email, rif, address) => {
				const store = getStore();
				const actions = getActions();
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const ops = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.token
					},
					body: JSON.stringify({
						company_id: companyId,
						name: name,
						phone: phone,
						email: email,
						rif: rif,
						address: address,
					}),
				}
				try {
					const response = await fetch(`${store.apiUrl}/create-supplier`, ops);
					if (!response.ok) {
						alert("Create supplier problem endpoint /create-supplier");
						return;
					}
					console.log(`Create a supplier succefully! ${name}`);
					actions.getSuppliers();
					return true;
				} catch (error) {
					console.log(error)
					return;
				}
			},
			getSuppliers: async () => {
				const store = getStore();
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const token = sessionStorage.getItem("token");
				const ops = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + token
					}
				};

				try {
					const response = await fetch(`${store.apiUrl}/suppliers/${companyId}`, ops);
					if (!response.ok) {
						alert("Get suppliers problem endpoint /suppliers");
						return;
					}

					const body = await response.json();
					setStore({
						suppliers: body
					})

					return body;

				} catch (error) {
					console.log(error)
				}
			},
			updateSupplier: async (supplierId, name, phone, email, rif, address) => {
				const store = getStore();
				const actions = getActions();
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const ops = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.token
					},
					body: JSON.stringify({
						company_id: companyId,
						name: name,
						phone: phone,
						email: email,
						rif: rif,
						address: address,
					}),
				}
				try {
					const response = await fetch(`${store.apiUrl}/update-supplier/${supplierId}`, ops);
					if (!response.ok) {
						alert("Update supplier has a problem with endpoint /update-supplier");
						return;
					}
					console.log(`Update a supplier succefully! ${name}`);
					actions.getSuppliers();
					return true;
				} catch (error) {
					console.log(error)
					return;
				}
			},
			// ---------------- END SUPPLIERS ACTIONS -------------


			// ---------------- START PRODUCT ACTIONS -------------

			createProduct: async (supplier_id, name, quantity, buying_cost, selling_cost, details, serial_number) => {
				const store = getStore();
				const actions = getActions();
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const ops = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.token
					},
					body: JSON.stringify({
						company_id: companyId,
						supplier_id: supplier_id,
						name: name,
						quantity: quantity,
						buying_cost: buying_cost,
						selling_cost: selling_cost,
						details: details,
						serial_number: serial_number,
						stock_alert: false,
						stock_quantity_alert: 5,
					}),
				}
				try {
					const response = await fetch(`${store.apiUrl}/create-product`, ops);
					if (!response.ok) {
						alert("Create product problem endpoint /create-product");
						return;
					}
					console.log(`Create a Product succefully! ${name}`);
					actions.getProducts();
					return true;
				} catch (error) {
					console.log(error)
					return;
				}
			},

			getProducts: async () => {
				const store = getStore();
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const token = sessionStorage.getItem("token");
				const ops = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + token
					}
				};

				try {
					const response = await fetch(`${store.apiUrl}/products/${companyId}`, ops);
					if (!response.ok) {
						alert("Get products problem endpoint /products");
						return;
					}

					const body = await response.json();
					setStore({
						products: body
					})

					return body;

				} catch (error) {
					console.log(error)
				}
			},
			getProductById: async (productId) => {
				const store = getStore();
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const token = sessionStorage.getItem("token");
				const ops = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + token
					}
				};

				try {
					const response = await fetch(`${store.apiUrl}/get-product-by-id/${companyId}/${productId}`, ops);
					if (!response.ok) {
						alert("Get product by id has a problem with endpoint /get-product-by-id");
						return;
					}

					const body = await response.json();
					console.log(body);
					return body;

				} catch (error) {
					console.log(error)
				}
			},
			updateProduct: async (productId, supplierId, name, details, serialNumber, quantity, buyingCost, sellingCost) => {
				const store = getStore();
				const actions = getActions();
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const ops = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.token
					},
					body: JSON.stringify({
						company_id: companyId,
						supplier_id: supplierId,
						name: name,
						details: details,
						serial_number: serialNumber,
						quantity: quantity,
						buying_cost: buyingCost,
						selling_cost: sellingCost,
					}),
				}
				try {
					const response = await fetch(`${store.apiUrl}/update-product/${productId}`, ops);
					if (!response.ok) {
						alert("Update product has a problem with endpoint /update-product");
						return;
					}
					console.log(`Update a product succefully! ${name}`);
					actions.getProducts();
					return true;
				} catch (error) {
					console.log(error)
					return;
				}
			},
			addLowStockAlert: async (id, stockAlert, stockQuantityAlert) => {
				const store = getStore();
				const actions = getActions();
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const ops = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.token
					},
					body: JSON.stringify({
						company_id: companyId,
						id: id,
						stock_alert: stockAlert,
						stock_quantity_alert: stockQuantityAlert
					}),
				}
				try {
					const response = await fetch(`${store.apiUrl}/stock-alert`, ops);
					if (!response.ok) {
						alert("Update stock alert product has a problem with endpoint /update-product");
						return false;
					}
					actions.getProducts();
					return true;
				} catch (error) {
					console.log(error)
					return false;
				}
			},

			// ---------------- END PRODUCTS ACTIONS -------------

			// ---------------- START COSTUMERS ACTIONS -------------
			getCustomers: async () => {
				const store = getStore();
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const token = sessionStorage.getItem("token");
				const ops = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + token
					}
				};

				try {
					const response = await fetch(`${store.apiUrl}/customers/${companyId}`, ops);
					if (!response.ok) {
						alert("Get customers has a problem with endpoint /customers");
						return;
					}

					const body = await response.json();
					setStore({
						customers: body
					})

					return body;

				} catch (error) {
					console.log(error)
				}
			},
			getCustomerById: async (customerId) => {
				const store = getStore();
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const token = sessionStorage.getItem("token");
				const ops = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + token
					}
				};

				try {
					const response = await fetch(`${store.apiUrl}/get-customer-by-id/${companyId}/${customerId}`, ops);
					if (!response.ok) {
						alert("Get customer by id has a problem with endpoint /customer-by-id");
						return;
					}

					const body = await response.json();
					console.log(body);
					return body;

				} catch (error) {
					console.log(error)
				}
			},
			updateCustomer: async (customerId, name, document, phone, address, email) => {
				const store = getStore();
				const actions = getActions();
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const ops = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.token
					},
					body: JSON.stringify({
						company_id: companyId,
						name: name,
						document_identity: document,
						phone: phone,
						address: address,
						email: email
					}),
				}
				try {
					const response = await fetch(`${store.apiUrl}/update-customer/${customerId}`, ops);
					if (!response.ok) {
						alert("Update customer has a problem with endpoint /update-customer");
						return;
					}
					console.log(`Update a customer successfully! ${name}`);
					actions.getCustomers();
					return true;
				} catch (error) {
					console.log(error)
					return;
				}
			},
			createCustomer: async (name, document, phone, address, email) => {
				const store = getStore();
				const actions = getActions();
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const ops = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.token
					},
					body: JSON.stringify({
						company_id: companyId,
						name: name,
						document_identity: document,
						phone: phone,
						address: address,
						email: email
					}),
				}
				try {
					const response = await fetch(`${store.apiUrl}/create-customer`, ops);
					if (!response.ok) {
						alert("Create customer has a problem with endpoint /create-customer");
						return;
					}
					console.log(`Create a customer successfully! ${name}`);
					actions.getCustomers();
					return true;
				} catch (error) {
					console.log(error)
					return;
				}
			},

			// ---------------- END COSTUMERS ACTIONS -------------

			// ---------------- START COSTUMER ORDERS ACTIONS -------------

			createCustomerOrder: async (payMethod, customerId, orderDetails, date, payment_id) => {
				const store = getStore();
				const actions = getActions();
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const ops = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.token
					},
					body: JSON.stringify({
						company_id: companyId,
						pay_method: payMethod,
						customer_id: customerId,
						order_details: orderDetails,
						order_status: true,
						date: date,
						payment_id: payment_id
					}),
				}
				try {
					const response = await fetch(`${store.apiUrl}/create-customer-order`, ops);
					if (!response.ok) {
						alert("Create customer order has a problem with endpoint /create-customer-order");
						return;
					}
					console.log(`Create a customer order successfully! ${orderDetails} ${payMethod}`);
					actions.getCustomerOrders();
					actions.getProducts();
					return true;
				} catch (error) {
					console.log(error)
					return;
				}
			},

			getCustomerOrders: async () => {
				const store = getStore();
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const token = sessionStorage.getItem("token");
				const ops = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + token
					}
				};

				try {
					const response = await fetch(`${store.apiUrl}/customer-orders/${companyId}`, ops);
					if (!response.ok) {
						alert("Get customer orders has a problem with endpoint /customer-orders");
						return;
					}

					const body = await response.json();
					setStore({
						customerOrders: body
					})

					return body;

				} catch (error) {
					console.log(error)
				}
			},

			// ---------------- END COSTUMER ORDERS ACTIONS -------------


			// ---------------- START DASHBOARD ACTIONS -------------
			clearDashboardData: (id) => {
				setStore({
					suppliers: [],
					selectedCompanyId: "",
					products: [],
					selectCompany: {},
					productsInfo: {},
					customers: [],
					customerOrders: []
				});
				sessionStorage.removeItem("selectedCompanyId");
			},
			getProductsInfo: async () => {
				const companyId = sessionStorage.getItem("selectedCompanyId");
				const actions = getActions();
				const store = getStore();
				const token = sessionStorage.getItem("token");
				const ops = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + token
					}
				};

				try {
					const response = await fetch(`${store.apiUrl}/products-widget/${companyId}`, ops);
					if (!response.ok) {
						return;
					}
					const body = await response.json();
					setStore({
						productsInfo: body
					})
					return body;
				} catch (error) {
					console.log(error)
				}
			}
		},
	};
};

export default getState;
