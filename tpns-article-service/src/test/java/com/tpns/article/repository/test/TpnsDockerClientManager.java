package com.tpns.article.repository.test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.spotify.docker.client.DefaultDockerClient;
import com.spotify.docker.client.DockerClient;
import com.spotify.docker.client.exceptions.DockerException;
import com.spotify.docker.client.messages.ContainerConfig;
import com.spotify.docker.client.messages.ContainerCreation;
import com.spotify.docker.client.messages.HostConfig;
import com.spotify.docker.client.messages.PortBinding;
import com.tpns.domain.utils.StringUtils;

public class TpnsDockerClientManager {

	private static final String DOCKER_IMAGE = "postgres:9.4";

	private static TpnsDockerClientManager instance;

	private DockerClient docker;

	/**
	 * Docker container ( postgres image ) as articledb;
	 */
	private ContainerCreation articledb;

	private String postgresContainerId;

	public TpnsDockerClientManager() {

	}

	public void start() throws Exception {

		this.docker = DefaultDockerClient.fromEnv().build();

		final Map<String, List<PortBinding>> portBindings = new HashMap<String, List<PortBinding>>();
		List<PortBinding> hostPorts = new ArrayList<PortBinding>();
		hostPorts.add(PortBinding.of("0.0.0.0", "5432"));
		portBindings.put("5432", hostPorts);

		final HostConfig hostConfig = HostConfig.builder().portBindings(portBindings).build();

		final ContainerConfig containerConfig = ContainerConfig.builder().hostConfig(hostConfig).image(DOCKER_IMAGE).exposedPorts("5432")
				.volumes("${HOME}/projects/tpns/data/article/pgdata:/var/lib/postgresql/data").env("POSTGRES_USER=tpns_article_db", "POSTGRES_PASS=tpns").build();

		this.articledb = docker.createContainer(containerConfig);
		this.postgresContainerId = articledb.id();

		docker.startContainer(postgresContainerId);

	}

	public void stop() throws Exception {

		if (null != docker) {
			stopRemoveContainer();

			closeClient();
		}

	}

	private void closeClient() {
		// Close the docker client
		docker.close();
	}

	private void stopRemoveContainer() throws DockerException, InterruptedException {
		if (StringUtils.hasText(this.postgresContainerId)) {
			docker.killContainer(postgresContainerId);

			// Remove container
			docker.removeContainer(postgresContainerId);

			this.postgresContainerId = null;
		}
	}

	public static TpnsDockerClientManager getInstance() {
		if (null == instance) {
			synchronized (TpnsDockerClientManager.class) {
				if (null == instance) {
					instance = new TpnsDockerClientManager();
				}
			}
		}
		return instance;
	}

}
