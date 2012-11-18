        <div class="page">
            <h2><?= ucfirst($title) ?></h2>
            <form action="form_submit" method="get" accept-charset="utf-8">
                <fieldset>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" />
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" />
                </fieldset>
                <fieldset>
                    <input type="submit" value="Continue &rarr;" />
                </fieldset>
            </form>
        </div>
