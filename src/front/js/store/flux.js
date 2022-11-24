const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl:
				"https://3001-sabahrahal-stockyfinalp-tk3340r9skm.ws-us77.gitpod.io/api",
			token: ""
		},
		actions: {
			// ---------------- START USER ACTIONS -------------
			syncToken: () => {
				const token = sessionStorage.getItem("token");
				if (token && token != "" && token != undefined) {
					console.log("Sync token...")
					setStore({ token: token })
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
			}
			// ---------------- END USER ACTIONS -------------

		},
	};
};

export default getState;
