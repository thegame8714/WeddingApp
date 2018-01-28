import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

configure({ adapter: new Adapter() })
