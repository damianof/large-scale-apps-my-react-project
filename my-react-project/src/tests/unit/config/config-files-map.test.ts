import { configFilesMap } from '@/config/config-files-map'

describe('configsMap', () => {
  it('instance should have "mock" key', () => {
    expect(configFilesMap.has('mock')).to.equal(true)
  })

  it('instance should have "jsonserver" key', () => {
    expect(configFilesMap.has('jsonserver')).to.equal(true)
  })

  it('instance should have "localapis" key', () => {
    expect(configFilesMap.has('localapis')).to.equal(true)
  })

  it('instance should have "beta" key', () => {
    expect(configFilesMap.has('beta')).to.equal(true)
  })

  it('instance should have "production" key', () => {
    expect(configFilesMap.has('production')).to.equal(true)
  })
})
