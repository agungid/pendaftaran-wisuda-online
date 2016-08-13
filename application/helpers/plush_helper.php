<?php

function sidebar_not_login(){
	?>
		<div class="col-md-3" style="padding: 0px; padding-right: 15px;">
			<div class="list-group">
				<a href="<?php echo base_url() ?>login" class="list-group-item"><i class="fa fa-hand-o-right"></i> Masuk</a>
				<a href="#" class="list-group-item"><i class="fa fa-hand-o-right"></i> Daftar</a>
				<a href="#" class="list-group-item"><i class="fa fa-paw"></i> Panduan</a>
				<a href="#" class="list-group-item"><i class="fa fa-graduation-cap"></i> Peserta Wisuda</a>
				<a href="#" class="list-group-item"><i class="fa fa-info-circle"></i> Lihat Posisi</a>
			</div>
		</div>
	<?php
}

function message_alert($message,$class){
	return "<div class='alert alert-".$class."'><button type='button' class='close' data-dismiss='alert' aria-label='Tutuo'><span aria-hidden='true'>&times;</span></button>$message</div>";
}