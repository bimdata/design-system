import { makeBIMDataApiClient } from "@bimdata/typescript-fetch-api-client";

export default function makeSmartComponent(component, fetchers, props = {}) {
  return {
    props: {
      ...props,
      apiUrl: {
        type: String,
        default: "https://api.bimdata.io",
      },
      accessToken: {
        type: String,
        required: true,
      },
    },
    data() {
      return Object.fromEntries(Object.keys(fetchers).map(key => [key, null]));
    },
    async created() {
      this.apiClient = makeBIMDataApiClient({
        apiUrl: this.apiUrl,
        accessToken: this.accessToken,
      });
      await Promise.all(
        Object.entries(fetchers).map(async ([prop, fetchData]) => {
          this[prop] = await fetchData(this.apiClient, this.$attrs);
        })
      );
    },
    watch: {
      accessToken(token) {
        this.apiClient.accessToken = token;
      },
    },
    render(h) {
      return h(component, {
        props: Object.fromEntries(
          [...Object.keys(fetchers), ...Object.keys(props)].map(prop => [
            prop,
            this[prop],
          ])
        ),
        on: this.$listeners,
      });
    },
  };
}
