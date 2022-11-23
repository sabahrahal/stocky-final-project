const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white",
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white",
				},
			],
			apiUrl:
				"https://3001-sabahrahal-stockyfinalp-tk3340r9skm.ws-us77.gitpod.io/api",
			token: ""
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			syncToken: () => {
				const token = sessionStorage.getItem("token");
				if (token && token != "" && token != undefined) {
					console.log("Sync token...")
					setStore({ token: token })
				}
			},
			//Login with JWT
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
					actions.syncToken();
					console.log(body.token);
				} catch (error) {
					console.log(error);
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
			
			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
		},
	};
};

export default getState;
