<template>
  <div class="page">
    <LyraDash v-if="configs.chain !== undefined && configs.chain === 'BDCASH'" />
    <AssetDash v-if="configs.chain !== undefined && configs.chain !== 'BDCASH'" />
  </div>
</template>

<script>
  let BDCashCore = require("@bdcash-protocol/core");
  import User from '../../libs/user'
  import BdcashDash from '../../components/BdcashDash'
  import AssetDash from '../../components/AssetDash'

  export default {
    name: 'Dashboard',
    components: { BdcashDash, AssetDash },
    data() {
      return {
        bdcash: new BDCashCore(true),
        configs: {},
        wallet: "",
        isLogging: true,
        isLoading: true
      };
    },
    async mounted() {
      const app = this
      app.bdcash.staticnodes = true
      app.wallet = await User.auth()
      if(app.wallet !== false){
        app.configs = await User.configs()
        app.ticker = 'BDCASH'
      }
    },
  };
</script>