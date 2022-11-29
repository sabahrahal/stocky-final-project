const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl:
				"https://3001-sabahrahal-stockyfinalp-tk3340r9skm.ws-us77.gitpod.io/api",
			token: "",
			user_id: "",
			companies: [],
			suppliers: [],
			selectedCompanyId: ""
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
			// ---------------- END SUPPLIERS ACTIONS -------------


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
