export default (await import('vue')).defineComponent({
data() {
return {
esVersions: ESVersions,
selectedVersion: null as string | null,
};
},
methods: {
selectVersion(version: string) {
this.selectedVersion = version;
},
},
components: { ESFeatures },
});
