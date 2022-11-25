const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl:
				"https://3001-sabahrahal-stockyfinalp-bvbpvpbhlta.ws-eu77.gitpod.io/api",
			token: "",
			user_id: "",
			companies: [],
			selectedCompanyId: ""
		},
		actions: {
			// ---------------- START USER ACTIONS -------------
			syncToken: () => {
				const token = sessionStorage.getItem("token");
				const user_id = sessionStorage.getItem("user_id")
				if (token && token != "" && token != undefined) {
					console.log("Sync token...")
					setStore({ token: token })
					setStore({ user_id: user_id })
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
			}
			// ---------------- END COMPANY ACTIONS -------------

		},
	};
};

export default getState;
