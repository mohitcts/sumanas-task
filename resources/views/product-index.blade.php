@extends('layouts.application')
@section('content')
<div class="row">
	<div class="col-12">
	</div>
</div>


<div class="col-12">
	<div class="card card-statistics">
		<div class="card-body">
			<div class="datatable-wrapper table-responsive">
				<table id="title" class="table table-striped custom-table datatable">
					<thead>
						<tr>
							<th>Sn. No.</th>
							<th>Name</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>
</div>
@endsection

@section('javascript')
<script>
var ajax_url = "{{ route('product.index.ajax') }}";
$(document).ready(function(){
	$('#title').DataTable({
		processing: true,
		serverSide: true,
		serverMethod: 'POST',
		ajax: {
			url: ajax_url,
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		},
		columns: [
			{ data: null, "searchable": false, "orderable": false },
			{ data: 'name' },
			{ data: 'price' },
			{ data: null, "searchable": false, "orderable": false, render: function( data, type, row, meta ) {
				//console.log(row);
				var purchase_url = "{{ route('purchase.index', '') }}" + "/" + row.id;
				return '<a class="btn btn-primary" href="' + purchase_url + '">Buy Now</a>';
			} },
		],
		fnRowCallback : function(nRow, aData, iDisplayIndex){
			$("td:first", nRow).html(iDisplayIndex + 1);
			return nRow;
		},
	});
});
</script>
@endsection