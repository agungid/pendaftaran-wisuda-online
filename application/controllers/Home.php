<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->auth->notlogged();
	}

	public function index()
	{
		$data['islogged'] = $this->session->userdata('logged_in');
		$data['title'] = 'Sistem Pendaftaran Wisuda Online';
		$this->template->page('home/index',$data);
	}
}
