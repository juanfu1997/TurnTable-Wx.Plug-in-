var plugin = requirePlugin("myPlugin")
Page({
	data:{
		wxpublic_id:1,
		userid:28,
		awards: [
	      { name: '', ratio:'0.2',bigprize:1,activeid:'89',image:'',rotate:'',leve:'',detail: "1"},
	      { name: '', ratio:'0.6',bigprize:0,activeid:'89',image:'',rotate:'',leve:'',detail: "1"},
	      { name: '', ratio:'0.2',bigprize:0,activeid:'89',image:'',rotate:'',leve:'',detail: "1"},
	      { name: '', ratio:'0.2',bigprize:0,activeid:'89',image:'',rotate:'',leve:'',detail: "1"},
	    ],
	},
  onLoad: function() {
  	// console.log(plugin)
  	plugin.$.toast('100')
  }
})