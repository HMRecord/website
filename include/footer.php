<footer class="footer">
    <div class="container">
        <span class="text-muted"><a href="about.php">About</a> | <a href="#" data-toggle="modal" data-target="#subscribeModal">Subscribe</a> | &copy; 2016<script>new Date().getFullYear()>2010&&document.write("-"+new Date().getFullYear());</script>, Horace Mann Record.</span>
    </div>
</footer>

<!-- Subscribe Modal -->
<div class="modal fade" id="subscribeModal" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
                <button type="button" class="close"
                   data-dismiss="modal">
                       <span aria-hidden="true">&times;</span>
                       <span class="sr-only">Close</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">
                    Subscribe to The Record
                </h4>
            </div>

            <!-- Modal Body -->
            <div class="modal-body">

                <form role="form" action="https://formspree.io/record@horacemann.org" method="POST">
                    <input type="hidden" name="_subject" value="Record Website Subscription Form" />
                    <input type="text" name="_gotcha" style="display:none" />
                    <div class="form-group">
                      <label for="nameInput">Name</label>
                        <input type="text" class="form-control"
                        id="nameInput" name="name" placeholder="Jane Doe"/>
                    </div>

                  <div class="form-group">
                    <label for="emailInput">Email</label>
                      <input type="email" class="form-control"
                      id="emailInput" name="email" placeholder="person@people.org"/>
                  </div>
                  <div class="form-group">
                    <label for="addressInput">Address</label>
                      <textarea class="form-control" name="address" id="addressInput" placeholder="Street address, city, zip code, etc." rows="3"></textarea>
                  </div>


            </div>

            <!-- Modal Footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-default"
                        data-dismiss="modal">
                            Cancel
                </button>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>

        </div>
    </div>
</div>
