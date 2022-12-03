const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl:
				"https://3001-sabahrahal-stockyfinalp-a454wouyluv.ws-us77.gitpod.io/api",
			token: "",
			user_id: "",
			companies: [],
			suppliers: [],
			products: []
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
			// ---------------- END USER ACTIONS -------------

			// ---------------- START COMPANY ACTIONS -------------
			createCompany: async (name, rif) => {
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

			selectCompany: (id) => {
				setStore({
					selectedCompanyId: id
				})
				sessionStorage.setItem(
					"selectedCompanyId",
					id
				)
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

			// ---------------- END PRODUCTS ACTIONS -------------


			// ---------------- START DASHBOARD ACTIONS -------------
			clearDashboardData: (id) => {
				setStore({
					suppliers: [],
					selectedCompanyId: ""
				});
				sessionStorage.removeItem("selectedCompanyId");
			},
			// ---------------- END DASHBOARD ACTIONS -------------

		},
	};
};

export default getState;
