$(window).scroll(function() {
    if ($(this).scrollTop() <60) {
        $('.sample123').fadeIn('slow');
        $('.sample12').fadeOut();
    } else if($(this).scrollTop() > 45) {
        $('.sample12').fadeIn();
    }
});

function del_fk(idnya){
	swal({
	  title: "Anda yakin ingin menghapus?",
	  text: "Mengahpus data akan menghapus semua jurusan dan mahasiswa terkait!",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: "Ya, Hapus!",
	  cancelButtonText: "Tidak, Batalkan!",
	  closeOnConfirm: false,
	  closeOnCancel: false
	},
	function(isConfirm) {
	  if (isConfirm) {
	    var csrf_token = $("meta[name=csrf_token]").attr('content');
	    $.ajax({
	    	method: "POST",
	    	url:base_url+'fakultas/hapus',
	    	data:'id='+idnya+'&csrf_test_name='+csrf_token,
	    	success: function(html){
	    		swal("Deleted!", "Data berhasil dihapus.", "success");
	    		$(".tr"+idnya).hide();
	    	}
	    });
	  } else {
	    swal("Cancelled", "Membatalkan penghapusan :)", "error");
	  }
	});
}

$(document).ready( function () {
    $('#fakultas_id').DataTable();
} );