# Davis: A Frontend for the [Porter](https://github.com/garbados/porter) CMS

Porter makes it effortless to manage and administer your content. Davis exposes your content to your readers, consumers, clients, etc. It aims to be beautiful, extensible, and effortless.

## Install

    # get the code
    git clone [this]
    # enter the project directory
    cd davis
    # get dependencies
    npm install
    # deploy as couchapp
    grunt deploy

Done. Now visit `http://localhost:5984/porter/_design/davis/_rewrite` to see your Porter content made ready for the world.

## Developing

`grunt server` will spin up a development server to serve the contents of your `dist` folder, and update it whenever your assets change. To make the development server work with CouchDB, you'll need to [enable CORS](http://wiki.apache.org/couchdb/CORS).

## Contribute

The project is still under heavy development. Run `./todo.sh` to see what remains undone.

If you want to help out, improve something as you please, and make a PR. Thanks!

## License

[MIT](http://opensource.org/licenses/MIT) for maximum parties.